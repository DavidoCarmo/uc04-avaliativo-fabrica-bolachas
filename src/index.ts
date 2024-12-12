// Gera um número inteiro aleatório entre min e max (inclusive)
const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // Gera um array de pesos de pacotes com valores aleatórios entre 400 e 600
  const generatePackageWeights = (size: number): number[] => {
    let weights: number[] = [];
    for (let i = 0; i < size; i++) {
      weights.push(getRandomInt(400, 600));
    }
    return weights;
  };
  
  // Analisa os pesos dos pacotes e exibe informações sobre o lote
  const analyzePackageWeights = (weights: number[]): void => {
    let maxWeight = weights[0];
    let minWeight = weights[0];
    let aboveStandard = 0;
    let belowStandard = 0;
  
    for (let weight of weights) {
      if (weight > maxWeight) maxWeight = weight;
      if (weight < minWeight) minWeight = weight;
      if (weight > 500) aboveStandard++;
      if (weight < 500) belowStandard++;
    }
  
    const variation = ((maxWeight - minWeight) / 500) * 100;
  
    console.log(`Maior peso: ${maxWeight}`);
    console.log(`Menor peso: ${minWeight}`);
    console.log(`Pacotes acima de 500g: ${aboveStandard}`);
    console.log(`Pacotes abaixo de 500g: ${belowStandard}`);
    console.log(`Variação: ${variation.toFixed(2)}%`);
    console.log(variation > 20 ? "Lote com alta divergência" : "Lote padrão");
  };
  
  // Gerar e analisar o lote de pacotes
  const packageWeights = generatePackageWeights(100);
  analyzePackageWeights(packageWeights);
  