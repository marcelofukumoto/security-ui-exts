# Post-move catalog mirror (test only)

Mirrors how rancher/ui-plugin-charts will list the Admission Controller extension after the move:
- `charts/kubewarden/4.2.4` is copied unchanged from rancher/ui-plugin-charts (main).
- `charts/kubewarden/4.2.5-moved.1` is the chart the security-ui-exts release workflow published to this fork's gh-pages.

Used to verify that an existing 4.2.4 install upgrades to a build released from security-ui-exts.
