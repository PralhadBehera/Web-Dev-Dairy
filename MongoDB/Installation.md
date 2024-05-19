# Steps to Install MongoDB on Windows using MSI

1.  Go to the https://www.mongodb.com/download-center/community to download the MongoDB Community Server.

2. When the download is complete open the msi file and click the next button in the startup screen:

3. Now accept the End-User License Agreement and click the next button:

4. Now select the complete option to install all the program features. Here, if you can want to install only selected program features and want to select the location of the installation, then use the Custom option:

5.  Select “Run service as Network Service user” and copy the path of the data directory. Click Next:

6. Click the Install button to start the MongoDB installation process:

7. After clicking on the install button installation of MongoDB begins:

8. Now click the Finish button to complete the MongoDB installation process:

9. Now we go to the location where MongoDB installed in step 5 in your system and copy the bin path:

10. Now, to create an environment variable open system properties >> Environment Variable >> System variable >> path >> Edit Environment variable and paste the copied link to your environment system and click Ok:

11. After setting the environment variable, we will run the MongoDB server, i.e. mongod.  So, open the command prompt and run the following command:

 ```cmd
 mongod
```