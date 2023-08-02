import { PrismaClient, Image } from "@prisma/client";
import { customizeRequest } from "../../payload/request/customize.Request";
const prisma = new PrismaClient();

async function shareCustomizeService(id: string) {
  return await prisma.customize.update({
    where: { id },
    data: {
      share: true,
    },
  });
}
async function copyCustomizeService(cusId: string, userId: string) {
  var cus = await getCustomizeByIdService(cusId);
  const check = await prisma.customize.findUnique({
    where: {
      customize_unique: {
        caseId: cus?.caseId ?? "",
        gpuId: cus?.gpuId ?? "",
        powerSupplyId: cus?.powerSupplyId ?? "",
        cpuId: cus?.cpuId ?? "",
        ramId: cus?.ramId ?? "",
        storageId: cus?.storageId ?? "",
        motherBoardId: cus?.motherBoardId ?? "",
        userId: userId ?? "",
        share: cus?.share ?? false
      }
    },
  })
  if (check != null) {
    throw new Error("You have already copy this customize")
  }
  if (cus == null) {
    return null;
  } else {
    return await prisma.customize.create({
      data: {
        share: false,
        motherBoardId: cus?.motherBoardId,
        gpuId: cus?.gpuId,
        powerSupplyId: cus?.powerSupplyId,
        cpuId: cus?.cpuId,
        ramId: cus?.ramId,
        storageId: cus?.storageId,
        caseId: cus?.caseId,
        userId: userId,
      },
    });
  }
}
async function createCustomizeService(custom: customizeRequest) {
  const check = await prisma.customize.findUnique({
    where: {
      customize_unique: {
        caseId: custom.caseId ?? "",
        gpuId: custom.gpuId ?? "",
        powerSupplyId: custom.powerSupplyId ?? "",
        cpuId: custom.cpuId ?? "",
        ramId: custom.ramId ?? "",
        storageId: custom.storageId ?? "",
        motherBoardId: custom.motherBoardId ?? "",
        userId: custom.userId ?? "",
        share: custom.share ?? false
      }
    },
  })
  if(check != null) {
    throw new Error("You have already copy this customize")
  }
  return await prisma.customize.create({
    data: {
      motherBoardId: custom.motherBoardId,
      gpuId: custom.gpuId,
      powerSupplyId: custom.powerSupplyId,
      cpuId: custom.cpuId,
      ramId: custom.ramId,
      storageId: custom.storageId,
      caseId: custom.caseId,
      userId: custom.userId,
    },
    include: {
      case: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      cpu: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      gpu: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      powerSupply: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      motherBoard: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      ram: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      storage: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      user: {
        select: {
          id: true,
          email: true,
          name: true,
          phoneNumber: true,
          role: true,
        },
      },
    },
  });
}
async function getAllAdminCustomizeService() {
  return await prisma.customize.findMany({
    where: {
      user: {
        role: "ADMIN",
      },
    },
    include: {
      case: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      cpu: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      gpu: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      powerSupply: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      motherBoard: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      ram: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      storage: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      user: {
        select: {
          id: true,
          email: true,
          name: true,
          phoneNumber: true,
          role: true,
        },
      },
    },
  });
}
async function getAllCustomizeServie() {
  return await prisma.customize.findMany({
    include: {
      case: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      cpu: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      gpu: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      powerSupply: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      motherBoard: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      ram: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      storage: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      user: {
        select: {
          id: true,
          email: true,
          name: true,
          phoneNumber: true,
          role: true,
        },
      },
    },
  });
}
async function getCustomizeByIdService(id: string) {
  return await prisma.customize.findUnique({
    where: { id },
    include: {
      case: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      cpu: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      gpu: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      powerSupply: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      motherBoard: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      ram: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      storage: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      user: {
        select: {
          id: true,
          email: true,
          name: true,
          phoneNumber: true,
          role: true,
        },
      },
    },
  });
}
async function deleteCustomizeService(id: string) {
  return await prisma.customize.delete({
    where: { id },
  });
}

async function updateCustomizeService(id: string, custom: customizeRequest) {
  return await prisma.customize.update({
    where: { id },
    data: {
      motherBoardId: custom.motherBoardId,
      gpuId: custom.gpuId,
      powerSupplyId: custom.powerSupplyId,
      cpuId: custom.cpuId,
      ramId: custom.ramId,
      storageId: custom.storageId,
      caseId: custom.caseId,
      userId: custom.userId,
    },
    include: {
      case: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      cpu: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      gpu: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      powerSupply: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      motherBoard: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      ram: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      storage: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      user: {
        select: {
          id: true,
          email: true,
          name: true,
          phoneNumber: true,
          role: true,
        },
      },
    },
  });
}
async function getAllCustomizeByUserIdService(id: string) {
  return await prisma.customize.findMany({
    where: {
      userId: id,
    },
    include: {
      case: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      cpu: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      gpu: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      powerSupply: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      motherBoard: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      ram: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      storage: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      user: {
        select: {
          id: true,
          email: true,
          name: true,
          phoneNumber: true,
          role: true,
        },
      },
    },
  });
}
async function getRandomService(id: string, type: string) {
  switch (type.toLocaleLowerCase()) {
    case "cpu":
      return await prisma.panelCpu.findMany({
        where: {
          NOT: {
            id: id
          }
        },
        take: 10,
        include: {
          category: true,
          cpu: {
            include: {
              color: {
                select: {
                  image: {
                    select: {
                      id: true,
                      imageUrl: true,
                    },
                  },
                }
              },
            },
          },
        }
      })
    case "gpu":
      return await prisma.panelGpu.findMany({

        where: {
          NOT: {
            id: id
          }
        },
        include: {
          category: true,
          gpu: {
            include: {
              color: {
                select: {
                  image: {
                    select: {
                      id: true,
                      imageUrl: true,
                    },
                  },
                }
              },
            },
          },
        },
        take: 10,
      })
    case "motherboard":
      return await prisma.panelMotherBoard.findMany({
        where: {
          NOT: {
            id: id
          }
        },
        take: 10,
        include: {
          category: true,
          motherBoard: {
            include: {
              color: {
                select: {
                  image: {
                    select: {
                      id: true,
                      imageUrl: true,
                    },
                  },
                }
              },
            },
          },
        }

      })
    case "ram":
      return await prisma.panelRam.findMany({
        where: {
          NOT: {
            id: id
          }
        },
        take: 10,
        include: {
          category: true,
          ram: {
            include: {
              color: {
                select: {
                  image: {
                    select: {
                      id: true,
                      imageUrl: true,
                    },
                  },
                }
              },
            },
          },
        }
      })
    case "storage":
      return await prisma.panelStorage.findMany({
        where: {
          NOT: {
            id: id
          }
        },
        take: 10,
        include: {
          category: true,
          storage: {
            include: {
              color: {
                select: {
                  image: {
                    select: {
                      id: true,
                      imageUrl: true,
                    },
                  },
                }
              },
            },
          },
        }
      })
    case "powersupply":
      return await prisma.panelPowerSupply.findMany({
        where: {
          NOT: {
            id: id
          }
        },
        take: 10,
        include: {
          category: true,
          powerSupply: {
            include: {
              color: {
                select: {
                  image: {
                    select: {
                      id: true,
                      imageUrl: true,
                    },
                  },
                }
              },
            },
          },
        }
      })
    case "case":
      return await prisma.panelCase.findMany({
        where: {
          NOT: {
            id: id
          }
        },
        take: 10,
        include: {
          category: true,
          case: {
            include: {
              color: {
                select: {
                  image: {
                    select: {
                      id: true,
                      imageUrl: true,
                    },
                  },
                }
              },
            },
          },
        }
      })
  }

}
async function getCustomizeCommunity(id: string) {
  return await prisma.customize.findMany({
    where: {
      share: true,
      NOT: {
        userId: id,
      }
    },
    include: {
      case: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      cpu: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      gpu: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      powerSupply: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      motherBoard: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      ram: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      storage: {
        include: {
          color: {
            include: {
              image: {
                select: {
                  id: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
      user: {
        select: {
          id: true,
          email: true,
          name: true,
          phoneNumber: true,
          role: true,
        },
      },
    },
  });
}
export default {
  getCustomizeCommunity,
  getRandomService,
  createCustomizeService,
  getAllCustomizeServie,
  getCustomizeByIdService,
  deleteCustomizeService,
  updateCustomizeService,
  shareCustomizeService,
  getAllAdminCustomizeService,
  copyCustomizeService,
  getAllCustomizeByUserIdService,
};
