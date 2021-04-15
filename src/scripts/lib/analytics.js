export default function track (events = {}) {
  for (let service in events) {
    const fn = window[service]

    if (!fn) continue

    fn.apply(this, events[service])
  }
}