rm -rf app/*
cp -r css fonts icons index.html js app/
rm -rf app.zip
zip -r app.zip app
cp app.zip ~/Development/iOS\ WorkSpace/panasiamodelunitednations/
MD5=$(md5 -q app.zip)
echo $MD5 > app.zip.md5
sed -i "" "s/^\(#define APP_AIP_MAIN_BUNDLE_MD5 \).*$/\1@\"$MD5\"/g" ~/Development/iOS\ WorkSpace/panasiamodelunitednations/panasiamodelunitednations/PamunDownloadHelper.h
