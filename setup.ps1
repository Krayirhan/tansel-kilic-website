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
Ensure-Command "npm"

$nodeVersion = node -v
$npmVersion = npm -v

Write-Host "Node.js: $nodeVersion"
Write-Host "npm: $npmVersion"

Step "Installing dependencies"
npm install

Step "Running lint"
npm run lint

Step "Running production build"
npm run build

if ($Dev) {
  Step "Starting development server"
  npm run dev
  exit $LASTEXITCODE
}

Write-Host ""
Write-Host "Setup completed successfully." -ForegroundColor Green
Write-Host "Use 'npm run dev' to start the local server." -ForegroundColor Green
