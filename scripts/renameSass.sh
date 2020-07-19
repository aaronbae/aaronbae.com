for file in */*.scss
do 
  mv "${file}"  "${file%.module.scss}.scss"
done