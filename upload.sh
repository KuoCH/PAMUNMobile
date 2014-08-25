ncftpput -R -v -u panasiamuncom -p P3N940R4 panasiamun.com /httpdocs/mobile app.zip app.zip.md5 
if [ "$1" == "--all" ]; then
  ncftpput -R -v -u panasiamuncom -p P3N940R4 panasiamun.com /httpdocs/mobile app/css app/fonts app/icons app/index.html app/js
fi
