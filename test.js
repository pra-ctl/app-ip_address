/*
  Import the built-in path module.
  See https://nodejs.org/api/path.html
  The path module provides utilities for working with file and directory paths.
  IAP requires the path module to access local file modules.
  The path module exports an object.
  Assign the imported object to variable path.
*/
const path = require('path');

/**
 * Import product
 */
var IpAddress = require(path.join(__dirname, 'main.js'));

/**
 *  This section is used to test function and log any errors.
 * We will make several positive and negative tests.
 */
 
function main() {

  // Create some test data for getFirstIpAddress(), both valid and invalid.
  let sampleCidrs = ['172.16.10.0/24', '172.16.10.0 255.255.255.0', '172.16.10.128/25', '192.168.1.216/30', '0.1.2.3/30', '0.1.2.3/32', '2001:db8::/55', '2001:db8::/128', '2001:db8::/129'];
  let sampleCidrsLen = sampleCidrs.length;

  // Iterate over sampleCidrs and pass the element's value to getFirstIpAddress().
  for (let i = 0; i < sampleCidrsLen; i++) {
    console.log(`\n--- Test Number ${i + 1} getFirstIpAddress(${sampleCidrs[i]}) ---`);
    // Call getFirstIpAddress and pass the test subnet and an anonymous callback function.
    // The callback is using the fat arrow operator: () => { }
    IpAddress.getFirstIpAddress(sampleCidrs[i], (data, error) => {
      // Now we are inside the callback function.
      // Display the results on the console.
      if (error) {
        console.error(`  Error returned from GET request: ${error}`);
      }
      console.log(`  Response returned from GET request: ${JSON.stringify(data)}`);
    });
  }
}

main()
