const https = require('https');

function testLexica() {
  const prompt = encodeURIComponent("cat sitting on a chair");
  const url = `https://lexica.art/api/v1/search?q=${prompt}`;

  return new Promise((resolve) => {
    https.get(url, (res) => {
      console.log(`STATUS: ${res.statusCode}`);
      console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const data = JSON.parse(body);
          console.log(`Images found: ${data.images ? data.images.length : 0}`);
          if (data.images && data.images.length > 0) {
            console.log("First Image Info:");
            console.log(`  ID: ${data.images[0].id}`);
            console.log(`  URL: ${data.images[0].src}`);
            console.log(`  Thumbnail: ${data.images[0].srcSmall}`);
            console.log(`  Width: ${data.images[0].width}`);
            console.log(`  Height: ${data.images[0].height}`);
          }
        } catch (e) {
          console.error("Failed to parse JSON:", e.message);
          console.log(`BODY: ${body.substring(0, 500)}`);
        }
        resolve(res.statusCode);
      });
    }).on('error', (e) => {
      console.error(`ERROR: ${e.message}`);
      resolve(500);
    });
  });
}

testLexica();
