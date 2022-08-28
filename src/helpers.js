export default function linkify(linkName) {
    return linkName.replace(/\s+/g, '-').toLowerCase()
}