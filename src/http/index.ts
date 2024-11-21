import type ICategoria from "@/interfaces/ICategoria";

export async function obterCategorias(){
    const resposta = await fetch('https://gist.githubusercontent.com/EmilenyRochaLeal/96a055d70a48829341c8d415e9e226ec/raw/9df0c00c61b8e4be023173bd5da08b08032673cb/categorias.json')

    const categorias: ICategoria[] = await resposta.json();
    return categorias;

}