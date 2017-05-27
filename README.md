ffmpeg encode by WSH
====================

Requirements
------------

- Windows 7 or later
- ffmpeg

Install ffmpeg
--------------

Download ffmpeg.

https://ffmpeg.org/download.html

And install it.

ex. ```%AppData%\\ffmpeg-20170520-64ea4d1-win64-static```

Copy preset file to ffmpeg path
-------------------------------

copy x264.ffpreset to ```ffmpegpath```

ex. ```%AppData%\\ffmpeg-20170520-64ea4d1-win64-static\\bin\\x264.ffpreset```

Note: this preset file from http://k-pi.hatenablog.com/entry/2015/02/28/210000

Endoce video file via drag-drop
-------------------------

Drag-drop video file to ```encode.wsf```.

