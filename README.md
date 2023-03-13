# WP-LazyYouTube
A WordPress Plugin to handle embeded YouTube Videos. Only loading minimal resources until user click, to see the Video.

## Stand Alone Funcitonality
Currently this Codebase is no  installable PlugIn for WordPress.
Is is a stand alone System which can be used on any site.
It is planned to convert this to a WP-Plugin in the future. Due to lack of time, i can not announce a Date when it will be released.

##Install the Codebase manually
To install the Codebase manually, upload this Codebase to your Server.
Maybe to a new folder `/lazyYT`.

Then you need to include the `lazyYouTube.js` file in your index file.
Also you need to change the `relativePath` prefix for the `lazyYouTube.js` on line 1.

If you miss this, it could be possible that there is no "YouTube Play" Button ontop of the thumbnails.
