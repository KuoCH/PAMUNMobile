find . -name ".DS_Store" -exec rm -f {} \;
ncftpput -R -v -u panasiamuncom -p P3N940R4 panasiamun.com /httpdocs/mobile app.zip app.zip.md5 
if [ "$1" == "--all" ]; then
  ncftpput -R -v -u panasiamuncom -p P3N940R4 panasiamun.com /httpdocs/mobile app/* assets
fi
