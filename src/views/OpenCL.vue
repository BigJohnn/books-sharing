<template>
  <div
    v-cloak
    class="OpenCL"
  >
    <h1>{{ title }}</h1>
    <h5>{{ author }}</h5>

    <li align="left">
      Introduction
    </li>
    <p
      v-for="(item) in intro"
      :key="item.id"
      align="left"
    >
      {{ item }}
    </p>
    <li align="left">
      The OpenCL Platform Layer
    </li>
    <p align="left">
      The OpenCL platform layer implements platform-specific
      features that allow applications to query OpenCL devices,
      device configuration information, and to create OpenCL
      contexts using one or more devices.
    </p>
    <p align="left">
      OpenCL平台层提供平台特定功能，允许应用查询OpenCL设备信息，并使用一个或多个设备创建opencl设备语境。
    </p>
    <li align="left">
      The OpenCL Runtime
    </li>
    <p align="left">
      API calls that manage OpenCL objects such as commandqueues, memory objects, program objects, kernel objects
      for __kernel functions in a program and calls that allow you to
      enqueue commands to a command-queue such as executing a
      kernel, reading, or writing a memory object.
      OpenCL运行时
    </p>
    <p align="left">
      管理OpenCL对象的应用程序接口调用。这些对象包括命令队列，内存对象，程序对象，内核对象 for __kernal函数以及命令队列的入队指令，如执行内核函数，读写内存对象等。
    </p>
    <li align="left">
      Buffer Objects[API 5.2]
    </li>
    <p align="left">
      Elements of buffer objects are stored sequentially and accessed using a pointer by a kernel
      executing on a device.
    </p>
    <p align="left">
      缓冲对象的元素按顺序存储并由内核使用指针访问，
      在设备(如GPU)上执行。
    </p>

    <li align="left">
      Image Formats 图片格式
    </li>
    <li align="left">
      Image Objects 图片对象
    </li>

    <li align="left">
      Pipes
    </li>
    <p align="left">
      A pipe is a memory object that stores data organized as a FIFO.
      Pipe objects can only be accessed using built-in functions that
      read from and write to a pipe. Pipe objects are not accessible
      from the host.
    </p>
    <p align="left">
      管道是按先进先出方式存储数据的内存对象，管道对象只能使用内置函数访问，无法使用主机访问。
    </p>

    <li align="left">
      Memory Objects[API 5.5]
    </li>
    <p align="left">
      A memory object is a handle to a reference counted region of
      global memory. Includes buffer objects, image objects, and
      pipe objects
      内存对象
      内存对象是全局内存的一个引用计数句柄。包括缓冲对象，图像对象和管道对象。
    </p>

    <li align="left">
      Shared Virtual Memory [API 5.6]
    </li>
    <p align="left">
      Shared Virtual Memory (SVM) allows the host and kernels
      executing on devices to directly share complex, pointercontaining data structures such as trees and linked lists.
      共享虚拟内存
      共享虚拟内存允许主机和设备内核之间共享复杂数据结构，如树结构和链表。
    </p>

    <li align="left">
      Flush and Finish [API 5.15]
    </li>
    <li align="left">
      Sampler Objects 采样器对象
    </li>
    <li align="left">
      Program Objects [API 5.8]
    </li>
    <li align="left">
      Kernel Objects[API 5.9 - 5.10]
    </li>
    <li align="left">
      Event Objects [API 5.11 - 5.14]
    </li>
    <li align="left">
      Memory Model: SVM [API 3.3.3]
    </li>
    <p align="left">
      OpenCL extends the global memory region into host memory through a
      shared virtual memory (SVM) mechanism. Three types of SVM in OpenCL:
      • Coarse-Grained buffer SVM: Sharing at the granularity of regions of OpenCL buffer memory objects.
      • Fine-Grained buffer SVM: Sharing occurs at the granularity of individual loads/stores into bytes within
      OpenCL buffer memory objects.
      • Fine-Grained system SVM: Sharing occurs at the granularity of individual loads/stores into bytes occurring
      anywhere within the host memory.
      内存模型SVM
      OpenCL通过共享虚拟内存(Shared Virtual Memory)机制扩展全局内存区域到主机内存。
      OpenCV中有3种SVM方式：
      •粗粒度缓冲区SVM：在OpenCL缓冲区内存对象的区域粒度上共享
      •细粒度缓冲区SVM：共享发生在单个加载/存储到OpenCL缓冲区内存对象的字节的粒度上。
      •细粒度系统SVM：共享发生在单个加载/存储到主机内存字节的粒度上。
    </p>

    <li align="left">
      Attribute Qualifiers [C 6.11]
    </li>
    <li align="left">
      Access Qualifiers [C 6.6]
    </li>
    <li align="left">
      Blocks
    </li>
    <p align="left">
      int (^myBlock)(int) = ^(int num) {return num * multiplier; };
    </p>

    <li align="left">
      Work-Item Built-in Functions [C 6.13.1]
    </li>
    <li align="left">
      Math Built-in Functions [C 6.13.2]
    </li>
    <li align="left">
      Math Constants
    </li>
    <li align="left">
      Image Query Functions
    </li>
    <li align="left">
      Common Built-in Functions
    </li>
    <li align="left">
      Integer Built-in Functions
    </li>
    <li align="left">
      Geometric Built-in Functions
    </li>
    <li align="left">
      Relational Built-in Functions
    </li>

    <li align="left">
      Vector Data Load/Store [C 6.13.7]
    </li>
    <li align="left">
      Synchronization & Memory Fence Functions [C 6.13.8]
    </li>
    <li align="left">
      Miscellaneous Vector Functions [C 6.13.12]
    </li>
    <li align="left">
      Async Copies and Prefetch [C 6.13.10]
    </li>

    <li align="left">
      Address Space Qualifier Functions [C 6.13.9]
    </li>
    <li align="left">
      Atomic Functions [C 6.13.11]
    </li>

    <img
      src="../assets/images/cl.jpeg"
      width="1024/"
    >
  </div>
</template>

<script>
/* eslint-disable */

  export default {
    data () {
      return {
        title: 'OpenCL3.0 笔记',
        author: 'BigJohhn',
        intro: [
          'OpenCL 开源计算语言 是通用并行计算领域的多供应商开源标准，用于包含CPU，GPU以及其他计算设备的复杂系统。',
          '它为软件开发者提供了统一的编程环境，以写出高效，可移植代码。这些代码应用于高性能计算服务器，桌面计算机系统和手持移动设备。',
          '技术规范和在线参考文档位于 www.khronos.org/opencl',
          '本文基于https://www.khronos.org/files/opencl30-reference-guide.pdf'
        ],
      }
    },
    methods: {
      
    },
    mounted() {
    //  console.log('OpenCL'); 
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" scoped>
    [v-cloak] {
      display: none;
    }
    p {
      text-indent: 2em;
    }
</style>
