import { useCallback, useState } from "react";

export const useMemoList = () => {
  const [memos, setMemos] = useState<string[]>([]);
  const addTodo = useCallback(
    (text: string) => {
      // State変更を正常に検知させるため新たな配列を生成
      const newMemos = [...memos];
      // テキストボックスの入力内容をメモ配列に追加
      newMemos.push(text);
      setMemos(newMemos);
      // 依存配列に忘れずにmemosを設定
    },
    [memos]
  );

  // メモ削除ロジック
  const deleteTodo = useCallback(
    (index: number) => {
      // State変更を正常に検知させるため新たな配列を生成
      const newMemos = [...memos];
      // メモ配列から該当の要素を削除
      newMemos.splice(index, 1);
      setMemos(newMemos);
    },
    [memos]
  );

  return { memos, addTodo, deleteTodo };
};
