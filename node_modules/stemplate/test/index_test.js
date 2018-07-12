var assert = require('assert');
var stemplate = require('../');

var test = function(template, object, expected) {
  var actual = stemplate(template, object);
  assert.equal(actual, expected);
};

describe('stemplate', function() {
  
  it('should be able to do a simple replace', function() {
    var exampleString = "Hi, my name is #{myName}";
    var objectHash = { myName: "Thomas" };
    test(exampleString, objectHash, "Hi, my name is Thomas");
  });
  
  it('should leave non-defined placeholders be', function() {
    var exampleString = "Hi, my name is #{firstname} #{lastname}";
    var objectHash = { firstname: "Thomas" };
    test(exampleString, objectHash, "Hi, my name is Thomas #{lastname}");
  });
  
  it('should replace multiple placeholders', function() {
    var exampleString = "#{firstname} #{lastname} - #{kids} kid(s)";
    var objectHash = {
      firstname: "Thomas",
      lastname: "Fritz",
      kids: 11
    };
    test(exampleString, objectHash, "Thomas Fritz - 11 kid(s)");
  });
  
  it('#{} should escape html', function() {
    var exampleString = 'Hi, my name is #{name}';
    var objectHash = {
      name: '<script>alert(1);</script>'
    };
    test(exampleString, objectHash, 'Hi, my name is &lt;script&gt;alert(1);&lt;/script&gt;');
  });
  
  it('!{} should not escape html', function() {
    var exampleString = 'Hi, my name is !{name}';
    var objectHash = {
      name: '<script>alert(1);</script>'
    };
    test(exampleString, objectHash, 'Hi, my name is <script>alert(1);</script>');
  });
  
});
