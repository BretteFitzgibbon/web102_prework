## GitHub Copilot Chat

- Extension Version: 0.22.4 (prod)
- VS Code: vscode/1.95.2
- OS: Mac

## Network

User Settings:
```json
  "github.copilot.advanced": {
    "debug.useElectronFetcher": true,
    "debug.useNodeFetcher": false
  }
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 140.82.116.5 (16 ms)
- DNS ipv6 Lookup: ::ffff:140.82.116.5 (2 ms)
- Electron Fetcher (configured): HTTP 200 (131 ms)
- Node Fetcher: HTTP 200 (130 ms)
- Helix Fetcher: HTTP 200 (211 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.112.22 (15 ms)
- DNS ipv6 Lookup: ::ffff:140.82.112.22 (1 ms)
- Electron Fetcher (configured): HTTP 200 (254 ms)
- Node Fetcher: HTTP 200 (596 ms)
- Helix Fetcher: HTTP 200 (271 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).