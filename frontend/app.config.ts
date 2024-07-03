export default defineAppConfig({
    ui: {
        notifications: {
            position: 'top-0 bottom-auto',
        },
        container: {
            base: '',
            padding: 'px-1',
            constrained: 'max-w-8xl'
        },
        card: {
            background: 'bg-white dark:bg-gray-900',
            ring: 'ring-1 ring-gray-200 dark:ring-gray-800'
        },
        badge: {
            color: 'primary'
        },
        modal: {
            height: 'h-90'
        },
        slideover: {
            width: 'w-screen max-w-lg'
        }
    }
})