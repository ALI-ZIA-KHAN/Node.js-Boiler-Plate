const fs =require ('fs');

fs.copyFileSync("file1.txt","file2.txt") ;  // .copyFileSync(src,dest,flags);
                                                // if destiation doesn't exist,it will create; 