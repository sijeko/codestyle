#!/bin/bash
#
# This script will update in place where the repository is. Meaning, the
# repository containing the hook will run `hg -C update` - thus creating a
# working set of files to perform checkstyle operations on. This may be an
# issue for very large projects with large amounts of changesets per group
#
# License: BSD Simplified
# Copyright (c) 2012, Justin Rovang
# All rights reserved.
#
# Redistribution and use in source and binary forms, with or without
# modification, are permitted provided that the following conditions are met:
#
#     Redistributions of source code must retain the above copyright notice,
#     this list of conditions and the following disclaimer.
#
#     Redistributions in binary form must reproduce the above copyright notice,
#     this list of conditions and the following disclaimer in the documentation
#     and/or other materials provided with the distribution.
#
#     Neither the name of Justin Rovang nor the names of its contributors may be
#     used to endorse or promote products derived from this software without
#     specific prior written permission.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
# AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
# IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
# ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
# LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
# CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
# SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
# INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
# CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
# ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
# POSSIBILITY OF SUCH DAMAGE.
#
##### CONFIGURABLES #####
# Extensions
EXTS='php|phpx'

# Checkstyle command path
CS='/home/rhodecode/php-code-sniffer/vendor/bin/phpcs'

# Arguments for checkstyle, a list of changed filles will tail this list
CS_ARGS='--standard=/home/rhodecode/php-code-sniffer/Sijeko  -s  --extensions='`echo $EXTS | sed 's#|#,#g'`'  --encoding=utf-8  -n'

TMP='/tmp'
##### END CONFIGURABLES #####


LOC_STYLE=$TMP"/hg-multiline.template"
LOC_STAGE='.'

# We need this template to easily get changed files across the changegroup
read -d '' STYLE_TEMPLATE <<EOF
changeset="{files}"
file="{file}\\\n"
EOF

# Command to retrieve the file list
CMD_FILELIST="$HG log --style "$LOC_STYLE" -r $HG_NODE:tip $PWD"

# Get a fresh copy of tip, we need physical files for checkstyle to use
# Other checkstyles may permit use of <STDIN>, this script is geared toward
# compatibility with PHPCS which doesn't support it
CMD_CO="$HG update -C"
eval $CMD_CO

# Dump template for use
if [ ! -f $LOC_STYLE ]; then
	for line in $STYLE_TEMPLATE; do
		echo $line >> $LOC_STYLE
	done
fi

# Get our file list, weed out duplicates
FILE_LIST=`$CMD_FILELIST  |  sort -u  |  grep -iP "\.($EXTS)$"`


# Compile our checklist into a space delimited list of files to specifically check
CHECK_LIST=""
IFSB=$IFS
IFS=$'\n'
for f in $FILE_LIST; do
		
	f=$(echo ${f} | sed 's/ /\\ /g')	

	if [ -f "$LOC_STAGE/$f" ]; then
		CHECK_LIST+=$LOC_STAGE"/"$f" "
	fi
done
IFS=$IFSB

if [ ! "$CHECK_LIST" ]; then
	exit 0
fi

CMD_PHPCS=`echo $CS $CS_ARGS $CHECK_LIST`
eval $CMD_PHPCS
status=$?

exit $status
