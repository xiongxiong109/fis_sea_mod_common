# fis_sea_mod_common
fis、sea配合的项目模板
本模板可以配合plugin_commonFn项目中的公共函数使用,
用fis-conf配置发布参数,将seajs的模块合并到一起,
然后通过seajs.use()方法进行模块加载

plugin_commonFn项目只专注于各种底层方法的封装
而该项目则负责提取plugin_commonFn中的方法,以模块化的形式加载到页面中来。
根据不同的页面所需文件不同,我们可以细粒度地配置fis.conf文件,分别对不同页面的引用做不同的压缩合并

通过fis3 release -d ./release pro的指令
可以生成所需的模板文件,然后用该模板文件书写页面