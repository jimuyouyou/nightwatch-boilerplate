module.exports = {
    'Search on google': (browser) => {
        browser
      .url('http://www.baidu.com')
      .saveScreenshot('./screenshot/baidu.png')
      .end();
    
    }
};