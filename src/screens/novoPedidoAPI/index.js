import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import ProdutoCard from "../../components/ProdutoCard";
import Header from "../../components/Header";

const NovoPedidoAPI = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (!loading && hasMore) {
      setLoading(true);

      try {
        // Fazer a chamada à API para obter os dados da próxima página
        const response = await fetch(`SUA_URL_DA_API?page=${page}`);
        const result = await response.json();

        // Verificar se há mais dados disponíveis
        if (result.length > 0) {
          setData((prevData) => [...prevData, ...result]);
          setPage((prevPage) => prevPage + 1);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }

      setLoading(false);
    }
  };

  const renderItem = ({ item }) => {
    return <ProdutoCard description={item.description} value={item.value} />;
  };

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>Carregando...</Text>
      </View>
    );
  };

  const ButtonFinalizarPedido = () => {
    // Lógica para tratar o pressionamento do botão Finalizar Pedido antes de ir para a tela "Inicio"

    navigation.navigate("Inicio");
  };

  return (
    <View style={styles.container}>
      <Header customStyle={styles.customHeaderStyle} title="Fazer Pedido" />
      <Text style={styles.cardapio}>Cardápio</Text>
      <ProdutoCard descricao="X-Tudo" value="12,00" />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={fetchData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        style={styles.list}
      />
      <TouchableOpacity
        style={styles.fixedButton}
        onPress={ButtonFinalizarPedido}
      >
        <Text style={styles.fixedButtonText}>Finalizar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  list: {
    marginBottom: 60
  },
  footer: {
    paddingVertical: 16,
    alignItems: "center"
  },
  footerText: {
    fontSize: 14,
    color: "#888888"
  },
  fixedButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    height: 50,
    backgroundColor: "#FFAC2E",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  fixedButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  customHeaderStyle: {
    marginBottom: 12
  },
  cardapio: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 13,
    color: "#3D3D3D"
  }
});

export default NovoPedidoAPI;
