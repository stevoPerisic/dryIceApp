echo "________________________________"
echo "********* DEBUG RUN ************"
echo "________________________________"


#First clean up the resources directory
DIR="Resources/"
rm -r $DIR*

#Titranium clean the build directory
titanium clean

#than build for debug
# titanium build -p ios -T simulator --debug-host localhost:8999
titanium build -p android -T device --shadow