import { test } from './rancher/rancher-test'
import { Shell } from './components/kubectl-shell'

// PROBE ONLY: render the kubectl shell exit status markers on this runner
test('Render shell markers', async({ page, nav }) => {
  await nav.cluster()
  const shell = new Shell(page)
  const dir = 'e2e/screenshots/chromium'
  const opts = { animations: 'disabled', caret: 'hide', scale: 'css' } as const

  for (const [cmd, status] of [['true', '0'], ['false', '1']]) {
    await shell.open()
    await shell.cursor.fill(`${cmd}; ES=$?; clear; echo EXITSTATUS-$ES`)
    await shell.cursor.press('Enter')
    await page.waitForTimeout(10_000)

    const box = await shell.screen.locator('canvas.xterm-link-layer').boundingBox() || { x: 72, y: 481 }
    const clip = { x: box.x, y: box.y, width: 100, height: 14 }
    await page.screenshot({ ...opts, path: `${dir}/shell-EXITSTATUS-${status}-ubuntu.png`, clip })
    if (status === '0') await page.screenshot({ ...opts, path: `${dir}/shell-EXITSTATUS-NaN-ubuntu.png`, clip: { ...clip, width: 77 } })
    await page.screenshot({ path: `${dir}/probe-full-${status}.png` })
    await shell.close()
  }
})
