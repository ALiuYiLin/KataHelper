import { ref } from 'vue'

const appPort = ref<null | string>(null)
const remotingAuthToken = ref<null | string>(null)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useConfigStore() {
  return {
    appPort,
    remotingAuthToken
  }
}
