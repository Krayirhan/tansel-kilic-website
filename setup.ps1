param(
  [switch]$Dev
)

$ErrorActionPreference = "Stop"

function Step($message) {
  Write-Host ""
  Write-Host "==> $message" -ForegroundColor Cyan
}

function Ensure-Command($name) {
  if (-not (Get-Command $name -ErrorAction SilentlyContinue)) {
    throw "$name is not installed or not available in PATH."
  }
}

Step "Checking environment"
Ensure-Command "node"
Ensure-Command "pnpm"

$nodeVersion = node -v
$pnpmVersion = pnpm -v

Write-Host "Node.js: $nodeVersion"
Write-Host "pnpm: $pnpmVersion"

Step "Installing dependencies"
pnpm install

Step "Running lint"
pnpm lint

Step "Running production build"
pnpm build

if ($Dev) {
  Step "Starting development server"
  pnpm dev
  exit $LASTEXITCODE
}

Write-Host ""
Write-Host "Setup completed successfully." -ForegroundColor Green
Write-Host "Use 'pnpm dev' to start the local server." -ForegroundColor Green
