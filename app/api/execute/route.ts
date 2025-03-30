import { NextRequest, NextResponse } from "next/server";
import { chromium } from 'playwright';

export async function POST(request: NextRequest) {
    try {
        const { commands } = await request.json();
        
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        const page = await context.newPage();
        // await page.goto('https://www.google.com');

        try {
            const actions = commands.actions || JSON.parse(commands).actions;

            if (actions.length > 0 && (actions[0].action === 'navigate' || actions[0].action === 'goto')) {
                await page.goto(actions[0].url);
                actions.shift();
            }
            
            for (const action of actions) {
                switch (action.action) {
                    case 'navigate':
                    case 'goto':
                        await page.goto(action.url);
                        break;
                    case 'click':
                        await page.click(action.selector);
                        break;
                    case 'type':
                        await page.type(action.selector, action.text);
                        break;
                    case 'wait_for_selector':
                        await page.waitForSelector(action.selector, {
                            timeout: action.timeout || 30000
                        });
                        break;
                    case 'wait_for_load_state':
                        await page.waitForLoadState(action.state as any, {
                            timeout: action.timeout || 30000
                        });
                        break;
                    case 'fill':
                        await page.fill(action.selector, action.value);
                        break;
                }
            }
            
            return NextResponse.json({ success: true });
        } catch (error) {
            console.error('Execution error:', error);
            return NextResponse.json({ error: 'Failed to execute commands' }, { status: 500 });
        } finally {
            await browser.close();
        }
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
    }
}