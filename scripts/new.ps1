# Scaffold helper for Windows PowerShell
#
#   .\scripts\new.ps1 day 13 "Closures"
#   .\scripts\new.ps1 dsa arrays two-sum "Two Sum" Easy "Hash Map"
#

param(
    [Parameter(Position=0)]
    [string]$Type,
    [Parameter(Position=1)]
    [string]$Arg1,
    [Parameter(Position=2)]
    [string]$Arg2,
    [Parameter(Position=3)]
    [string]$Arg3,
    [Parameter(Position=4)]
    [string]$Arg4,
    [Parameter(Position=5)]
    [string]$Arg5
)

$RootDir = Split-Path -Parent $PSScriptRoot

switch ($Type) {
    "day" {
        if (-not $Arg1 -or -not $Arg2) {
            Write-Host "Usage: .\scripts\new.ps1 day <number> <topic>" -ForegroundColor Red
            exit 1
        }
        $N = "{0:D2}" -f [int]$Arg1
        $Topic = $Arg2
        $Dir = Join-Path $RootDir "Day-$N"

        if (Test-Path $Dir) {
            Write-Host "✗ Day-$N already exists" -ForegroundColor Yellow
            exit 1
        }

        New-Item -ItemType Directory -Path $Dir | Out-Null
        $templatePath = Join-Path $RootDir "scripts\templates\day-readme.md"
        $template = Get-Content -Path $templatePath -Raw -Encoding utf8
        $template = $template.Replace("{{NN}}", $N).Replace("{{TOPIC}}", $Topic)
        
        Set-Content -Path (Join-Path $Dir "README.md") -Value $template -Encoding utf8
        New-Item -ItemType File -Path (Join-Path $Dir "day$N.js") | Out-Null
        New-Item -ItemType File -Path (Join-Path $Dir "day${N}_practice.js") | Out-Null

        Write-Host "✓ Created Day-$N (README.md, day$N.js, day${N}_practice.js)" -ForegroundColor Green
    }
    "dsa" {
        if (-not $Arg1 -or -not $Arg2 -or -not $Arg3) {
            Write-Host "Usage: .\scripts\new.ps1 dsa <topic> <slug> <title> [Easy|Medium|Hard] [pattern]" -ForegroundColor Red
            exit 1
        }
        $Topic = $Arg1
        $Slug = $Arg2
        $Title = $Arg3
        $Diff = if ($Arg4) { $Arg4 } else { "Easy" }
        $Pattern = if ($Arg5) { $Arg5 } else { "TBD" }

        $TopicDir = Join-Path $RootDir "DSA\$Topic"
        $FilePath = Join-Path $TopicDir "$Slug.js"

        if (Test-Path $FilePath) {
            Write-Host "✗ $FilePath already exists" -ForegroundColor Yellow
            exit 1
        }

        if (-not (Test-Path $TopicDir)) {
            New-Item -ItemType Directory -Path $TopicDir | Out-Null
        }

        $templatePath = Join-Path $RootDir "DSA\_template.js"
        $template = Get-Content -Path $templatePath -Raw -Encoding utf8
        $template = $template.Replace("{{TITLE}}", $Title).Replace("{{DIFF}}", $Diff).Replace("{{PATTERN}}", $Pattern)

        Set-Content -Path $FilePath -Value $template -Encoding utf8
        Write-Host "✓ Created DSA\$Topic\$Slug.js" -ForegroundColor Green
    }
    Default {
        Write-Host "Usage:"
        Write-Host "  .\scripts\new.ps1 day <number> <topic>"
        Write-Host "  .\scripts\new.ps1 dsa <topic> <slug> <title> [Easy|Medium|Hard] [pattern]"
        exit 1
    }
}
