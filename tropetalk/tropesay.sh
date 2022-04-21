#!/bin/bash
echo $0
cd "$(dirname "$0")"
pwd

export CX_BOTTLE='TropeTrainer(tm) software.msi'

/Applications/CrossOver.app/Contents/SharedSupport/CrossOver/bin/wine ./tropesay.exe $1
