rm -rf app
cp -r website app
rm -rf app.zip
zip -9 -r app.zip app
cp app.zip ~/Development/iOS\ WorkSpace/panasiamodelunitednations/
cp app.zip ~/Development/Android\ Workspace/PanAsiaMUN/assets/
MD5=$(md5 -q app.zip)
printf 'MD5 %s\n' $MD5
echo $MD5 > app.zip.md5
sed -i "" "s/^\(#define APP_AIP_MAIN_BUNDLE_MD5 \).*$/\1@\"$MD5\"/g" ~/Development/iOS\ WorkSpace/panasiamodelunitednations/panasiamodelunitednations/PamunDownloadHelper.h
sed -i "" "s/\(static final String APP_ZIP_MAIN_BUNDLE_MD5\).*$/\1 = \"$MD5\";/g" ~/Development/Android\ Workspace/PanAsiaMUN/src/com/panasiamodelunitednations/main/ActivityMain.java
