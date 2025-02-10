        import { SDK } from "https://webdraw.com/webdraw-sdk@v1";

        const { createApp } = Vue;

        createApp({
            data() {
                return {
                    mobileMenuOpen: false,
                    featuredProducts: [
                        {
                            id: 1,
                            name: "RTX 4090 Gaming OC",
                            description: "Placa de vídeo topo de linha para gaming extremo",
                            price: "R$ 12.999,00",
                            image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b"
                        },
                        {
                            id: 2,
                            name: "Intel Core i9-13900K",
                            description: "Processador de última geração para máximo desempenho",
                            price: "R$ 4.299,00",
                            image: "https://images.unsplash.com/photo-1587831991559-20c1ba52a6bf"
                        },
                        {
                            id: 3,
                            name: "ROG Maximus Z790 Hero",
                            description: "Placa-mãe premium para overclock e gaming",
                            price: "R$ 5.499,00",
                            image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
                        },
                        {
                            id: 4,
                            name: "Corsair Dominator 32GB DDR5",
                            description: "Memória RAM DDR5 6000MHz RGB",
                            price: "R$ 1.899,00",
                            image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b"
                        },
                        {
                            id: 5,
                            name: "Samsung 990 Pro 2TB",
                            description: "SSD NVMe PCIe 4.0 de alta performance",
                            price: "R$ 1.799,00",
                            image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
                        },
                        {
                            id: 6,
                            name: "NZXT Kraken Z73",
                            description: "Water Cooler 360mm RGB com display LCD",
                            price: "R$ 2.499,00",
                            image: "https://images.unsplash.com/photo-1587831991559-20c1ba52a6bf"
                        },
                        {
                            id: 7,
                            name: "Lian Li O11 Dynamic EVO",
                            description: "Gabinete premium com design inovador",
                            price: "R$ 1.299,00",
                            image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
                        },
                        {
                            id: 8,
                            name: "Corsair HX1200",
                            description: "Fonte 1200W 80 Plus Platinum modular",
                            price: "R$ 2.299,00",
                            image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b"
                        },
                        {
                            id: 9,
                            name: "AMD Ryzen 9 7950X",
                            description: "Processador topo de linha AMD AM5",
                            price: "R$ 4.999,00",
                            image: "https://images.unsplash.com/photo-1587831991559-20c1ba52a6bf"
                        },
                        {
                            id: 10,
                            name: "RX 7900 XTX",
                            description: "Placa de vídeo AMD topo de linha",
                            price: "R$ 9.999,00",
                            image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
                        },
                        {
                            id: 11,
                            name: "G.Skill Trident Z5",
                            description: "Kit Memória 64GB DDR5 7200MHz",
                            price: "R$ 3.499,00",
                            image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b"
                        },
                        {
                            id: 12,
                            name: "ASRock X670E Taichi",
                            description: "Placa-mãe AMD AM5 premium",
                            price: "R$ 4.299,00",
                            image: "https://images.unsplash.com/photo-1587831991559-20c1ba52a6bf"
                        },
                        {
                            id: 13,
                            name: "RTX 4080 SUPRIM X",
                            description: "Placa de vídeo premium MSI",
                            price: "R$ 10.499,00",
                            image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
                        },
                        {
                            id: 14,
                            name: "WD Black SN850X 4TB",
                            description: "SSD NVMe PCIe 4.0 Gaming",
                            price: "R$ 2.999,00",
                            image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b"
                        },
                        {
                            id: 15,
                            name: "be quiet! Dark Power 13",
                            description: "Fonte 1000W 80 Plus Titanium",
                            price: "R$ 2.799,00",
                            image: "https://images.unsplash.com/photo-1587831991559-20c1ba52a6bf"
                        },
                        {
                            id: 16,
                            name: "Phanteks Evolv X",
                            description: "Gabinete E-ATX premium",
                            price: "R$ 1.899,00",
                            image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
                        },
                        {
                            id: 17,
                            name: "Arctic Liquid Freezer II 420",
                            description: "Water cooler 420mm de alto desempenho",
                            price: "R$ 1.499,00",
                            image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b"
                        },
                        {
                            id: 18,
                            name: "Intel Core i7-13700K",
                            description: "Processador gaming de alta performance",
                            price: "R$ 3.299,00",
                            image: "https://images.unsplash.com/photo-1587831991559-20c1ba52a6bf"
                        },
                        {
                            id: 19,
                            name: "RTX 4070 Ti Gaming X Trio",
                            description: "Placa de vídeo MSI de alto desempenho",
                            price: "R$ 7.499,00",
                            image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
                        },
                        {
                            id: 20,
                            name: "Crucial T700 2TB",
                            description: "SSD NVMe PCIe 5.0 de última geração",
                            price: "R$ 2.499,00",
                            image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b"
                        },
                        {
                            id: 21,
                            name: "AMD Ryzen 7 7800X3D",
                            description: "Processador gaming com 3D V-Cache",
                            price: "R$ 3.799,00",
                            image: "https://images.unsplash.com/photo-1587831991559-20c1ba52a6bf"
                        },
                        {
                            id: 22,
                            name: "MSI MEG Z790 ACE",
                            description: "Placa-mãe Intel premium",
                            price: "R$ 4.999,00",
                            image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
                        },
                        {
                            id: 23,
                            name: "Corsair MP700 Pro 4TB",
                            description: "SSD NVMe PCIe 5.0 com heatsink",
                            price: "R$ 3.999,00",
                            image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b"
                        },
                        {
                            id: 24,
                            name: "Lian Li Uni Fan SL120",
                            description: "Kit 3 Fans RGB Premium",
                            price: "R$ 499,00",
                            image: "https://images.unsplash.com/photo-1587831991559-20c1ba52a6bf"
                        },
                        {
                            id: 25,
                            name: "ASUS ROG Swift PG32UQX",
                            description: "Monitor Gaming 4K 144Hz Mini LED",
                            price: "R$ 12.999,00",
                            image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
                        },
                        {
                            id: 4,
                            name: "Corsair Dominator 32GB DDR5",
                            description: "Memória RAM DDR5 6000MHz RGB",
                            price: "R$ 1.899,00",
                            image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b"
                        },
                        {
                            id: 5,
                            name: "Samsung 990 Pro 2TB",
                            description: "SSD NVMe PCIe 4.0 de alta performance",
                            price: "R$ 1.799,00",
                            image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
                        },
                        {
                            id: 6,
                            name: "NZXT Kraken Z73",
                            description: "Water Cooler 360mm RGB com display LCD",
                            price: "R$ 2.499,00",
                            image: "https://images.unsplash.com/photo-1587831991559-20c1ba52a6bf"
                        },
                        {
                            id: 7,
                            name: "Lian Li O11 Dynamic EVO",
                            description: "Gabinete premium com design inovador",
                            price: "R$ 1.299,00",
                            image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
                        },
                        {
                            id: 8,
                            name: "Corsair HX1200",
                            description: "Fonte 1200W 80 Plus Platinum modular",
                            price: "R$ 2.299,00",
                            image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b"
                        },
                        {
                            id: 9,
                            name: "AMD Ryzen 9 7950X",
                            description: "Processador topo de linha AMD AM5",
                            price: "R$ 4.999,00",
                            image: "https://images.unsplash.com/photo-1587831991559-20c1ba52a6bf"
                        },
                        {
                            id: 10,
                            name: "RX 7900 XTX",
                            description: "Placa de vídeo AMD topo de linha",
                            price: "R$ 9.999,00",
                            image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
                        },
                        {
                            id: 11,
                            name: "G.Skill Trident Z5",
                            description: "Kit Memória 64GB DDR5 7200MHz",
                            price: "R$ 3.499,00",
                            image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b"
                        },
                        {
                            id: 12,
                            name: "ASRock X670E Taichi",
                            description: "Placa-mãe AMD AM5 premium",
                            price: "R$ 4.299,00",
                            image: "https://images.unsplash.com/photo-1587831991559-20c1ba52a6bf"
                        },
                        {
                            id: 13,
                            name: "RTX 4080 SUPRIM X",
                            description: "Placa de vídeo premium MSI",
                            price: "R$ 10.499,00",
                            image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
                        },
                        {
                            id: 14,
                            name: "WD Black SN850X 4TB",
                            description: "SSD NVMe PCIe 4.0 Gaming",
                            price: "R$ 2.999,00",
                            image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b"
                        },
                        {
                            id: 15,
                            name: "be quiet! Dark Power 13",
                            description: "Fonte 1000W 80 Plus Titanium",
                            price: "R$ 2.799,00",
                            image: "https://images.unsplash.com/photo-1587831991559-20c1ba52a6bf"
                        },
                        {
                            id: 16,
                            name: "Phanteks Evolv X",
                            description: "Gabinete E-ATX premium",
                            price: "R$ 1.899,00",
                            image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
                        },
                        {
                            id: 17,
                            name: "Arctic Liquid Freezer II 420",
                            description: "Water cooler 420mm de alto desempenho",
                            price: "R$ 1.499,00",
                            image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b"
                        },
                        {
                            id: 18,
                            name: "Intel Core i7-13700K",
                            description: "Processador gaming de alta performance",
                            price: "R$ 3.299,00",
                            image: "https://images.unsplash.com/photo-1587831991559-20c1ba52a6bf"
                        },
                        {
                            id: 19,
                            name: "RTX 4070 Ti Gaming X Trio",
                            description: "Placa de vídeo MSI de alto desempenho",
                            price: "R$ 7.499,00",
                            image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
                        },
                        {
                            id: 20,
                            name: "Crucial T700 2TB",
                            description: "SSD NVMe PCIe 5.0 de última geração",
                            price: "R$ 2.499,00",
                            image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b"
                        },
                        {
                            id: 21,
                            name: "AMD Ryzen 7 7800X3D",
                            description: "Processador gaming com 3D V-Cache",
                            price: "R$ 3.799,00",
                            image: "https://images.unsplash.com/photo-1587831991559-20c1ba52a6bf"
                        },
                        {
                            id: 22,
                            name: "MSI MEG Z790 ACE",
                            description: "Placa-mãe Intel premium",
                            price: "R$ 4.999,00",
                            image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
                        },
                        {
                            id: 23,
                            name: "Corsair MP700 Pro 4TB",
                            description: "SSD NVMe PCIe 5.0 com heatsink",
                            price: "R$ 3.999,00",
                            image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b"
                        },
                        {
                            id: 24,
                            name: "Lian Li Uni Fan SL120",
                            description: "Kit 3 Fans RGB Premium",
                            price: "R$ 499,00",
                            image: "https://images.unsplash.com/photo-1587831991559-20c1ba52a6bf"
                        },
                        {
                            id: 25,
                            name: "ASUS ROG Swift PG32UQX",
                            description: "Monitor Gaming 4K 144Hz Mini LED",
                            price: "R$ 12.999,00",
                            image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
                        }
                    ],
                    loading: false
                }
            },
            methods: {
                toggleMobileMenu() {
                    this.mobileMenuOpen = !this.mobileMenuOpen;
                },
                async showConfigurator() {
                    this.loading = true;
                    try {
                        const sdk = SDK;
                        const response = await sdk.fetch("https://webdraw.com/api/generate?task=text", {
                            method: "POST",
                            body: JSON.stringify({
                                model: "openai:gpt-4-turbo",
                                messages: [{
                                    role: "user",
                                    content: "Generate PC configuration recommendations based on user preferences"
                                }]
                            })
                        });
                        const data = this.safeJSONParse(response);
                        // Handle the configuration data
                        console.log(data.text);
                    } catch (error) {
                        console.error(error);
                    } finally {
                        this.loading = false;
                    }
                },
                addToCart(product) {
                    // Add to cart logic here
                    alert(`Produto ${product.name} adicionado ao carrinho!`);
                },
                safeJSONParse(response) {
                    if (response.status < 400 && response.status >= 200) {
                        return JSON.parse(response.body);
                    }
                    const error = typeof response.body === "string" ? { message: response.body } : response.body;
                    throw error;
                }
            }
        }).mount('#app');
