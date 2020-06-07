/**
 * Created by yasuyuki on 2017/05/25.
 */
(function () {
    // set ffmpeg path
    var ffmpegpath = '%AppData%\\ffmpeg-20180201-b1af0e2-win64-static\\bin\\'

    // get arguments
    var filePath = WScript.Arguments(0);
    var p = filePath.split('\\');
    var fileName = p.pop();
    var f = fileName.split('.');

    var outFile = f[0]+'.mp4';
    var out = '"'+outPath+'\\'+outFile+'"';

    var exec = '%comspec% /c "' + ffmpegpath +'ffmpeg.exe" -fflags +discardcorrupt -i ' + filePath + ' -fpre ' + ffmpegpath + 'x264.ffpreset -aspect 16:9 -pass 1  -passlogfile %temp%\\pass.log -filter:v yadif -flags +loop+global_header -vcodec libx264 -acodec ac3 -ac 6 -profile:a aac_low -strict experimental ' + out + ' & pause';

    // execute command
    var shell = WScript.CreateObject( "WScript.Shell" );

    //shell.Run(exec);
    shell.run(exec);

})();
