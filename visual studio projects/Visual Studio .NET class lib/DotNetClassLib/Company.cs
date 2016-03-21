using System.IO;
using System.Runtime.Serialization.Json;
using System.Text;

namespace falafel.testcomplete
{
    public class Company
    {
        public string Name { get; set; }
        public string Url { get; set; }

        public string toJson()
        {
            var serializer = new DataContractJsonSerializer(typeof(Company));
            using (MemoryStream stream = new MemoryStream())
            {
                serializer.WriteObject(stream, this);
                return Encoding.Default.GetString(stream.ToArray());
            }
        }
    }
}
