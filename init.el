;; init.el --- Description -*- lexical-binding: t; -*-
(require 'org)
(require 'json)
(require 'backtrace)

(setq org-html-head ""
      org-html-head-extra ""
      org-html-head-include-default-style nil
      org-html-head-include-scripts nil
      org-html-preamble nil
      org-html-postamble nil
      org-html-use-infojs nil
      org-export-body-only t
      org-export-with-toc nil
      org-export-with-latex t
      org-html-html5-fancy t
      org-html-toplevel-hlevel 2
      org-export-with-section-numbers nil
      org-export-headline-levels 6
      org-latex-compiler "xelatex"
      org-preview-latex-default-process 'dvisvgm)

(defun org->html (file)
  (save-window-excursion
    (find-file file)
    (let* ((keywords '("title" "category" "tags" "email" "language" "author" "description"))
           (kvs (org-collect-keywords keywords)))
      (append
       (mapcar (lambda (kv)
                 (cons (intern (downcase (car kv)))
                       (cadr kv)))
               kvs)
       `((content .
                  ,(progn
                     (org-html-export-as-html nil nil nil t)
                     (buffer-string))))))))

(defun main ()
  (cl-loop
   (let ((message (read-string "")))
     (condition-case e
         (let* ((request (json-parse-string message  :array-type 'list))
                (jsonrpc (gethash "jsonrpc" request))
                (method (gethash "method" request))
                (params (gethash "params" request))
                (id (gethash "id" request)))
           (let ((result
                  (cl-block 'exec
                    (handler-bind ((error
                                    (lambda (e)
                                      (cl-return-from 'exec
                                        (list 'error
                                              (list 'message (error-message-string e)
                                                    'backtrace (backtrace-to-string (backtrace-get-frames 'backtrace))))))))
                      (list 'result (apply (symbol-function (intern method))
                                           params))))))
             (princ (json-serialize
                     (list 'jsonrpc "2.0"
                           'result result
                           'id id)))
             (princ "\n")))
       (error (princ (prin1-to-string e) 'external-debugging-output)
              (princ "\n" 'external-debugging-output))))))
;; (org->html-to-stdout (concat default-directory "blogs/demo.org"))
