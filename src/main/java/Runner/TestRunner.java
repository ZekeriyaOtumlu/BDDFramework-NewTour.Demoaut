package Runner;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features ={"C:\\Users\\Zack\\IdeaProjects\\VerizonAssignmentBDDFramework\\src\\main\\java\\features"},
        glue={"stepDefinition"},
        format= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},
        monochrome = true,
        strict = true,
        dryRun = false
)
public class TestRunner {
}
