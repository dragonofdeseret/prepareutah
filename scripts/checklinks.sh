#!/usr/bin/env bash
# Usage: ./checklinks.sh file_with_"id url"_lines  -> prints status per URL
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"
export UA
chk(){ id="$1"; url="$2"; code=$(curl -s -L -o /dev/null -w "%{http_code}" -A "$UA" -H "Accept: text/html,application/xhtml+xml,application/pdf,*/*" --max-time 30 "$url"); echo "$code $id $url"; }
export -f chk
xargs -P 12 -L 1 bash -c 'chk "$0" "$1"' < "$1" | sort
