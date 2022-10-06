export const sort = (docs) => docs.map((doc) => doc.data()).sort((prev, next) => prev.id - next.id)
