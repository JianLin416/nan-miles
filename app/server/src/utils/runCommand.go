package utils

import (
	"fmt"
	"os/exec"
)

func RunCommand(cmdStr string) {
	cmd := exec.Command("bash", "-c", cmdStr)
	output, err := cmd.CombinedOutput()
	if err != nil {
		fmt.Printf("执行失败: %s\n错误: %s\n输出: %s\n", cmdStr, err, string(output))
	} else {
		fmt.Printf("成功执行: %s\n输出: %s\n", cmdStr, string(output))
	}
}
