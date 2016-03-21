//USEUNIT TestCompleteOnScreenObjectUnit

/**
 * Wraps a window object from TestComplete
 */
class TestCompleteWindow extends TestCompleteOnScreenObject {
    close(){
        this.TestCompleteObject.Close();
        return this;
    }

    maximize(){
        this.TestCompleteObject.Maximize();
        return this;
    }
}
