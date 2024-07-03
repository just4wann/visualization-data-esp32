#include <PubSubClient.h>
#include <WiFi.h>

const char *ssid = "YOUR_SSID";
const char *password = "YOUR_PASSWORD";
const char *clientId = "YOUR_CLIENTID";
const char *mqttServer = "YOUR_MQTT_SERVER";
const char *mqttUsername = "YOUR_USERNAME";
const char *mqttPassword = "YOUR_PASSWORD";

WiFiClient espClient;
PubSubClient client(espClient);

void connectToWifi() {
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.println("Connecting to WiFi...");
    delay(1000);
  }
  Serial.println("Connected!");
  Serial.println("IP Address : ");
  Serial.println(WiFi.localIP());
}

void connectToMQTT() {
  while (!client.connected()) {
    Serial.println("Connecting to MQTT....");
    if (client.connect(clientId, mqttUsername, mqttPassword)) {
      Serial.println("Success connect to MQTT!");
    } else {
      Serial.println("Connecting to MQTT failed, reconnect in 5s");
      ESP.restart();
      delay(5000);
    }
  }
}

void publishMessage() {
  // USE DUMMY DATA FOR TEMPORARY
  long temperatureData = random(100);
  long humidityData = random(100);
  long efficiencyData = random(100);
  long averageData = random(100);

  char temp[20];
  char hum[20];
  char eff[20];
  char avg[20];

  sprintf(temp, "%ld", temperatureData);
  sprintf(hum, "%ld", humidityData);
  sprintf(eff, "%ld", efficiencyData);
  sprintf(avg, "%ld", averageData);

  const char* temperature = temp;
  const char* humidity = hum;
  const char* efficiency = eff;
  const char* average = avg;

  client.publish("temperature", temperature);
  client.publish("humidity", humidity);
  client.publish("efficiency", efficiency);
  client.publish("average", average);
  
  delay(1000);
}

void setup() {
  Serial.begin(9600);
  connectToWifi();
  client.setServer(mqttServer, 1883);
  randomSeed(analogRead(0));
}

void loop() {
  if (!client.connected()) 
  {
    connectToMQTT();
  }
  client.loop();
  publishMessage();
  delay(1000);
}