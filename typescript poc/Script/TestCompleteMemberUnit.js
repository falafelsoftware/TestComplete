/**
 * Holds a collection of mappings from TestComplete objects to ts/js classes.
 */
var TestCompleteMembers = (function () {
    function TestCompleteMembers() {
        this.Items = new Array();
    }
    TestCompleteMembers.prototype.add = function (testCompletePropertyName, classPropertyName) {
        this.Items.push(new TestCompleteMember(testCompletePropertyName, classPropertyName));
        return this;
    };
    return TestCompleteMembers;
})();
/**
 * Used to map a TestComplete member to a class member.
 */
var TestCompleteMember = (function () {
    function TestCompleteMember(testCompletePropertyName, classPropertyName) {
        this.TestCompletePropertyName = testCompletePropertyName;
        this.ClassPropertyName = classPropertyName ? classPropertyName : testCompletePropertyName;
    }
    return TestCompleteMember;
})();
