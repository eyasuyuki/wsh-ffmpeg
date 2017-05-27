/**
 * Created by yasuyuki on 2017/05/25.
 */
(function () {
    // set ffmpeg path
    var ffmpegpath = '%AppData%\\ffmpeg-20170520-64ea4d1-win64-static\\bin\\'

    // get arguments
    var filePath = WScript.Arguments(0);
    var p = filePath.split('\\');
    var fileName = p.pop();
    var f = fileName.split('.');
    var outPath = p.join('\\');
    var outFile = f[0]+'.mp4';

    var exec = '%comspec% /c "' + ffmpegpath +'ffmpeg.exe" -fflags +discardcorrupt -i ' + filePath + ' -fpre ' + ffmpegpath + 'x264.ffpreset -aspect 16:9 -pass 1  -passlogfile %temp%\\pass.log -filter:v yadif -flags +loop+global_header -vcodec libx264 -acodec aac -profile:a aac_low -strict experimental ' + outPath + '\\' + outFile + ' & pause';

    // execute command
    var shell = WScript.CreateObject( "WScript.Shell" );

    //shell.Run(exec);
    shell.run(exec);

})();
