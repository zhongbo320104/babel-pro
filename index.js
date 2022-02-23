/**
 * babel 插件开发
 * 
 * https://lihautan.com/babel-ast-explorer/#?eyJiYWJlbFNldHRpbmdzIjp7InZlcnNpb24iOiI3LjYuMCJ9LCJ0cmVlU2V0dGluZ3MiOnsiaGlkZUVtcHR5Ijp0cnVlLCJoaWRlTG9jYXRpb24iOnRydWUsImhpZGVUeXBlIjp0cnVlLCJoaWRlQ29tbWVudHMiOnRydWV9LCJjb2RlIjoiY29uc3QgYSA9IDEwXG5jb25zdCBiID0gMjAifQ==
 * 
module.exports = () => {
    return {
        visitor: {
            
        }
    }
}
 */

module.exports = ({ types: t }) => {
    return {
        visitor: {
            Identifier(path) {
                // console.log(path)
                const isDebug = path.node.name === "DEBUG"
                const parentIsIf = t.isIfStatement(path.parentPath)
                console.log(parentIsIf, isDebug)
                if (parentIsIf && isDebug) {
                    // 把Identifier转化成string
                    const stringNode = t.stringLiteral("DEBUG")
                    path.replaceWith(stringNode)
                }
            },
            StringLiteral(path) {
                const isDebug = path.node.value === "DEBUG"
                const parentIsIf = t.isIfStatement(path.parentPath)
                if (parentIsIf && isDebug) {
                    // 生产下面才能执行
                    if (process.env.NODE_ENV === "production") {
                        path.parentPath.remove()
                    }
                }
            }
        }
    }
}