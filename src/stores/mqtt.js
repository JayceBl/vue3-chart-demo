import { defineStore } from "pinia";
import * as mqtt from "mqtt/dist/mqtt.min";

export const useMqttStore = defineStore("mqtt", {
  state: () => ({
    mqttClient: null,
  }),
  actions: {
    setMqttClient(client) {
      this.mqttClient = client;
    },
    connect(option) {
      mqtt.connect();
    },
  },
});
