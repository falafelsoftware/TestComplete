//USEUNIT ExtendsUnit
//USEUNIT TestCompleteMemberUnit
var TestCompleteBase = (function () {
    function TestCompleteBase(testCompleteObject) {
        this.TestCompleteObject = testCompleteObject;
        if (!this.TestCompleteObject) {
            Log.Error("A TestComplete object was not passed to TestCompleteBase.");
        }
        this.refresh();
        this.validate();
    }
    TestCompleteBase.prototype.supports = function (member) {
        return aqObject.IsSupported(this.TestCompleteObject, member);
    };
    /**
     * Assign members from the wrapped TestComplete object to this class.
     */
    TestCompleteBase.prototype.assign = function (members) {
        for (var _i = 0, _a = members.Items; _i < _a.length; _i++) {
            var member = _a[_i];
            if (this.supports(member.TestCompletePropertyName)) {
                this[member.ClassPropertyName] = this.TestCompleteObject[member.TestCompletePropertyName];
            }
        }
        return this;
    };
    /**
     * Load properties using the TestCompleteObject as a base
     */
    TestCompleteBase.prototype.refresh = function () {
        if (this.TestCompleteObject.Parent) {
            this.Parent = new TestCompleteBase(this.TestCompleteObject.Parent);
            this.Parent.assign(new TestCompleteMembers().add("RefreshMappingInfo"));
        }
        if (this.Parent && this.Parent.RefreshMappingInfo) {
            this.Parent.RefreshMappingInfo();
        }
        return this;
    };
    /**
     * Validate new property values
     */
    TestCompleteBase.prototype.validate = function () {
        return this;
    };
    return TestCompleteBase;
})();
