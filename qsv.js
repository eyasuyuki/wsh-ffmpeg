/**
 * Created by yasuyuki on 2017/05/25.
 */
(function () {
    // set ffmpeg path
    var ffmpegpath = '%AppData%\\ffmpeg-20180201-b1af0e2-win64-static\\bin\\'

    // get arguments
    var filePath = WScript.Arguments(0);
    var inFile = "" + "\u0022" + filePath + "\u0022" + "";
    var p = filePath.split('\\');
    var fileName = p.pop();
    var f = fileName.split('.');
    var outPath = p.join('\\');
    var outFile = f[0]+'.mp4';
    var out = "" + "\u0022" + outPath + '\\' + outFile + "\u0022" + "";

    //var exec = '%comspec% /c "' + ffmpegpath +'ffmpeg.exe" -init_hw_device qsv:hw -i ' + filePath + ' -c:v h264_qsv -b:V 2000k -maxrate 2000k -look_ahead 0 -q 20 -acodec ac3 -aspect 16:9 -pass 1  -passlogfile %temp%\\pass.log ' + outPath + '\\' + outFile + ' & pause';
    var exec = '%comspec% /c "' + ffmpegpath +'ffmpeg.exe" -init_hw_device qsv:hw -i ' + inFile + ' -loglevel info -pix_fmt nv12 -c:v h264_qsv -async_depth 4 -avbr_accuracy 0 -avbr_convergence 0 -preset veryslow -vcm 0 -bitrate_limit 1 -cavlc 0 -idr_interval 0 -pic_timing_sei 1 -max_dec_frame_buffering 0 -look_ahead 0 -look_ahead_depth 0 -look_ahead_downsampling off -trellis:v P -profile:v high -b:v 3834000 -g 74 -bf 2 -slices 1 -refs 3 -b_strategy 1 -flags +cgop -a53cc 0 -maxrate 3834000 -bufsize 4474111  -compression_level 10 -c:a ac3  -ac 6 -y ' + out + ' & pause';

    // execute command
    var shell = WScript.CreateObject( "WScript.Shell" );

    //shell.Run(exec);
    shell.run(exec);

})();
