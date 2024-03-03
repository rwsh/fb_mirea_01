// обычная функция для вычисления факториала
function Fact(N) {
    if (N === 1) {
        return 1
    } else {
        return N * Fact(N - 1) // используем рекурсию
    }
}

// компонент
export default function Factorial(props) {
    let N = props.N // получаем число из атрибутов компонента
    let F = Fact(N) // вызываем внешнее вычисление
    return (
        <div>
            {props.N}! = {F}
        </div>
    )
}

