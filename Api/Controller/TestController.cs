using Microsoft.AspNetCore.Mvc;
// http://localhost:5066/api/Test

public class TestController : BaseController
{
    // app.MapGet("/test", () => "Hello World!");
    // http://localhost:5066/api/Test/test
    [HttpGet()]
    public string GetHelloWorldText()
    {
        return "Hello World2!";
    }

    [HttpGet("testRequest")]
    public ActionResult<string> TestRequest()
    {
        return BadRequest("Badby World2!");
    }
}